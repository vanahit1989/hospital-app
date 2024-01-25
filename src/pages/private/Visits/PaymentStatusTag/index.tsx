import {EPaymentStatusUI} from "../../../../data/types/general.types.ts";
import {Colors} from "../../../../core/CssVariables.ts";
import Tag from "../../../../components/Tag";

const PaymentStatusTag = ({status}: {status?:  EPaymentStatusUI}) => {
    const statusMapper = {
        [EPaymentStatusUI.PAID]: {
            color: Colors.SuccessColor,
            title: EPaymentStatusUI.PAID
        },
        [EPaymentStatusUI.PENDING]: {
            color: Colors.WarningColor,
            title: EPaymentStatusUI.PENDING
        },
    }
    if (!status) return null;
    return (
        <Tag color={statusMapper[status].color}>{statusMapper[status].title} </Tag>
    );
};
export default PaymentStatusTag