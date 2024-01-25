import { forwardRef, useImperativeHandle, useMemo, useState} from "react";
import Modal from "../../../../../components/Modal";
import {useForm} from "antd/es/form/Form";
import {Col, Form, Input, message, Row, Select} from "antd";
import {FormItem} from "../../../../../components/Form/FormItem";
import {visitFields} from "./CreateVisitModal.data.ts";
import {useGetDoctors} from "../../../../../firebase/userHooks.tsx";
import {useCreateVisitHook} from "../../../../../firebase/visitHooks.tsx";
import {TVisitUI} from "../../../../../data/types/visit.types.ts";
import {TCreateVisitForm, TCreateVisitModalProps} from "./CreateVisitModal.types.ts";

const {issue, doctor} = visitFields;


const CreateVisitModal = forwardRef(({patientId}:TCreateVisitModalProps, ref) => {
    const [open, setOpen] = useState(false);
   const [form] = useForm<TCreateVisitForm>();
   const {data} = useGetDoctors();
   const doctorOptions = useMemo(() => {
       return (data || []).map(item => ({label: item.displayName, value: item.docId}))
   }, [data])
   const {isLoading, mutate } = useCreateVisitHook({
       onSuccess: () => {
           message.success(`Visit has been created successfully!`, 3);
    },
       onError: (err) => {
           message.error(err.message, 3);
       }
   });
    useImperativeHandle(ref, () => {
       return {
           open: () => setOpen(true),
       }
   }, [])

    const onClose = () => {
        setOpen(false);
        form.resetFields();
    }
    const onSubmit =  async  () => {
      const values:TCreateVisitForm =  await form.validateFields();
      mutate({ patientId, doctorId: values.doctor, issue: values.issue} as TVisitUI);
      onClose();
    }


    return (
        <Modal onCancel={onClose} afterClose={onClose} open={open} onOk={onSubmit} title='Create Visit' confirmLoading={isLoading} okText='Create'>
          <Form form={form}>
              <Row gutter={[12, 12]}>
                  <Col span={24}>
                      <FormItem {...doctor}>
                          <Select options={doctorOptions} placeholder={doctor.placeholder} />
                      </FormItem>
                  </Col>
                  <Col span={24}>
                      <FormItem {...issue} >
                          <Input placeholder={issue.placeholder} />
                      </FormItem>
                  </Col>
              </Row>
          </Form>
        </Modal>
    );
});

export default CreateVisitModal;