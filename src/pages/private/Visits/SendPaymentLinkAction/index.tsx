import {TPaymentLinkUI, TVisitUI} from "../../../../data/types/visit.types.ts";
import Button from "../../../../components/Button";
import {useSendPaymentLinkHook} from "../../../../firebase/visitHooks.tsx";
import {useMemo} from "react";
import {Colors} from "../../../../core/CssVariables.ts";
import {message} from "antd";

const SendPaymentLinkAction = ({ visit }: {visit?: TVisitUI}) => {
    const {mutate, isLoading} = useSendPaymentLinkHook( {onSuccess: () => {
        message.success(`Payment link has been sent successfully!`, 3);
    },
        onError: (err) => {
        message.error(err.message, 3);
    }});
    const totalAmount = useMemo(() => {
        let amount = 0;
        if (visit?.services?.length) {
            visit.services.forEach(({price, count}) => {
                amount += price * count;
            })
        }
        return amount;
    }, [visit?.services])

    if (!visit) return null;
    const {docId, issue} = visit;
    const onSend = () => {
        mutate({
            visitId: docId || '',
            amount: totalAmount,
            quantity: 1,
            reason: issue
        } as TPaymentLinkUI)
    }
    return (
        <Button type='default' color={Colors.Grey} onClick={onSend} loading={isLoading}>
            Send Payment Link
        </Button>
    );
};

export default SendPaymentLinkAction