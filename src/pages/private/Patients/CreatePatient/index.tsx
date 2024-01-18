import {forwardRef, useImperativeHandle, useState} from "react";
import Modal from "../../../../components/Modal";
import {useForm} from "antd/es/form/Form";
import {Col, Form, Input, Row} from "antd";
import {TCreatePatientDB} from "../../../../data/types/patient.types.ts";
import {FormItem} from "../../../../components/Form/FormItem";
import {patientFields} from "./CreatePatiet.data.ts";

const {name, country, street, state, city, zipCode} = patientFields;

// eslint-disable-next-line no-empty-pattern
const CreatePatient = forwardRef(({}, ref) => {
   const [open, setOpen] = useState(false);
   const [form] = useForm<TCreatePatientDB>();

    useImperativeHandle(ref, () => {
       return {
           open: () => setOpen(true),
       }
   }, [])
    return (
        <Modal open={open} title='Create a patient'>
          <Form form={form}>
              <Row>
                  <Col span={24}>
                      <FormItem {...name}>
                          <Input placeholder={name.placeholder} />
                      </FormItem>
                  </Col>
                  <Col span={12}>
                      <FormItem {...country}>
                          <Input placeholder={country.placeholder} />
                      </FormItem>
                  </Col>
                  <Col span={12}>
                      <FormItem {...city}>
                          <Input placeholder={city.placeholder} />
                      </FormItem>
                  </Col>
                  <Col span={12}>
                      <FormItem {...street}>
                          <Input placeholder={street.placeholder} />
                      </FormItem>
                  </Col>
                  <Col span={12}>
                      <FormItem {...zipCode}>
                          <Input placeholder={zipCode.placeholder} />
                      </FormItem>
                  </Col>
              </Row>
          </Form>
        </Modal>
    );
});

export default CreatePatient;