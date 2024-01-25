import {forwardRef, useImperativeHandle, useState} from "react";
import Modal from "../../../../components/Modal";
import {useForm} from "antd/es/form/Form";
import {Col, Form, Input, message, Row} from "antd";
import {FormItem} from "../../../../components/Form/FormItem";
import {serviceFields} from "./CreateServiceModal.data.ts";
import {TServiceUI} from "../../../../data/types/visit.types.ts";
import {useCreateVisitServiceHook} from "../../../../firebase/visitHooks.tsx";

const {name, count, price} = serviceFields;


const CreateServiceModal = forwardRef(({visitId}: {visitId: string}, ref) => {
    const [open, setOpen] = useState(false);
   const [form] = useForm<TServiceUI>();
   const {isLoading, mutate } = useCreateVisitServiceHook(visitId,{
       onSuccess: () => {
           message.success(`Service has been added successfully!`, 3);
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
      const values:TServiceUI =  await form.validateFields();
      console.log(values, 'values')
      mutate(values);
      onClose();
    }

    return (
        <Modal onCancel={onClose} afterClose={onClose} open={open} onOk={onSubmit} title='Create Service' confirmLoading={isLoading} okText='Create'>
          <Form form={form}>
              <Row gutter={[12, 12]}>
                  <Col span={24}>
                      <FormItem {...name}>
                          <Input placeholder={name.placeholder} />
                      </FormItem>
                  </Col>
                  <Col span={12}>
                      <FormItem {...count}  >
                          <Input type='number' placeholder={count.placeholder} />
                      </FormItem>
                  </Col>
                  <Col span={12}>
                      <FormItem {...price}  >
                          <Input placeholder={price.placeholder} />
                      </FormItem>
                  </Col>
              </Row>
          </Form>
        </Modal>
    );
});

export default CreateServiceModal;