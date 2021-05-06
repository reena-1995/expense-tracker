import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,FormGroup,Label,Input } from 'reactstrap';

const AddTransaction = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('CREDIT');
  const [note, setNote] = useState('');

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" className="m-1" onClick={toggle}>{buttonLabel}</Button>
      <Button className="m-1" color="danger" onClick={props.logout}>Logout</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Add transaction</ModalHeader>
        <ModalBody>
        <FormGroup>
                                <Label>Amount</Label>
                                  <input
                                    className={"form-control"}
                                    name="amount"
                                    type="text"
                                    placeholder="Amount"
                                    value={amount}
                                    onChange={e => setAmount(e.target.value )}
                                  />
                                </FormGroup>
                                <FormGroup>
        <Label for="type">Select</Label>
        <Input type="select" onChange={(e)=>setType(e.target.value)} name="type" id="type">
          <option>CREDIT</option>
          <option>DEBIT</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="note">Note</Label>
        <Input type="textarea" name="note" id="note" onChange={(e)=>setNote(e.target.value)} />
      </FormGroup>
            
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={()=>{props.createTransactions({amount,type,note});toggle()}}>Add</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddTransaction;