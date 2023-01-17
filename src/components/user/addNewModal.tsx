import {FC, useState} from 'react';
import {Input, Modal, Switch} from "antd";
import {postUser} from "../../api/service";

const AddNewModal: FC<{ setIsShowModal: (value: boolean) => void, isShowModal: boolean }> = ({
                                                                                               setIsShowModal,
                                                                                               isShowModal
                                                                                             }) => {
  
  const [login, setLogin] = useState('')
  const [name, setName] = useState('')
  const [active, setActive] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  const addNewUser = () => {
    postUser({login, name, active: active ? 1 : 0}).then()
    setIsShowModal(false)
  }
    
    return (
      <Modal
        open={isShowModal}
        closable={false}
        onOk={addNewUser}
        onCancel={() => setIsShowModal(false)}
        title={'Добавить нового получателя'}
        centered={true}
      >
        
        <div style={{margin: '40px 0', display: "flex", flexDirection: 'column', gap: '20px', alignItems: 'start', }}>
          <Input title={'логин'} placeholder={'логин'} onChange={(e) => setLogin(e.target.value)}/>
          <Input title={'имя'} placeholder={'имя'} bordered={true} onChange={(e) => setName(e.target.value)}/>
          <Switch title={'активный'}
                  onChange={(value) => setActive(value)}
                  checkedChildren={'Рассылка включена'}
                  unCheckedChildren={'Рассылка выключена'}
                  defaultChecked/>
        </div>
      
      </Modal>
    );
  };
  
  export default AddNewModal;