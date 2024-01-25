import {forwardRef, useImperativeHandle, useState} from "react";
import Modal from "../../../../components/Modal";
import {useForm} from "antd/es/form/Form";
import {Col, Form, Input, message, Row} from "antd";
import { TPatientUI} from "../../../../data/types/patient.types.ts";
import {FormItem} from "../../../../components/Form/FormItem";
import {patientFields} from "./CreatePatiet.data.ts";
import {useCreatePatientHook} from "../../../../firebase/useCreatePatientHook.tsx";
import {useQueryClient} from "react-query";

const {name, email, country, street, state, city, zipCode} = patientFields;


const CreatePatient = forwardRef((_, ref) => {
    const queryClient = useQueryClient()
    const [open, setOpen] = useState(false);
   const [form] = useForm<TPatientUI>();
   const {isLoading, mutate } = useCreatePatientHook({
       onSuccess: () => {
           queryClient.invalidateQueries({ queryKey: ['patients'] });
           message.success(`Patient has been added successfully!`, 3);
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
      const values:TPatientUI =  await form.validateFields();
      mutate(values);
      onClose();
    }


    return (
        <Modal onCancel={onClose} afterClose={onClose} open={open} onOk={onSubmit} title='Create Patient' confirmLoading={isLoading} okText='Create'>
          <Form form={form}>
              <Row gutter={[12, 12]}>
                  <Col span={24}>
                      <FormItem {...name}>
                          <Input placeholder={name.placeholder} />
                      </FormItem>
                  </Col>
                  <Col span={24}>
                      <FormItem {...email}>
                          <Input placeholder={email.placeholder} />
                      </FormItem>
                  </Col>
                  <Col span={24}>
                      <FormItem {...street} name={['address', street.name]}>
                          <Input placeholder={street.placeholder} />
                      </FormItem>
                  </Col>
                  <Col span={12}>
                      <FormItem {...city} name={['address', city.name]}>
                          <Input placeholder={city.placeholder} />
                      </FormItem>
                  </Col>
                  <Col span={12}>
                      <FormItem {...state} name={['address', state.name]}>
                          <Input placeholder={state.placeholder} />
                      </FormItem>
                  </Col>
                  <Col span={12}>
                      <FormItem {...zipCode} name={['address', zipCode.name]}>
                          <Input  placeholder={zipCode.placeholder} />
                      </FormItem>
                  </Col>
                  <Col span={12}>
                      <FormItem {...country} name={['address', country.name]}>
                          <Input placeholder={country.placeholder} />
                      </FormItem>
                  </Col>
              </Row>
          </Form>
        </Modal>
    );
});

export default CreatePatient;