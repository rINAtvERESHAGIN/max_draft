import React, {useEffect, useState} from "react";
import {Button, Card, Layout} from "antd";
import {withStyles} from "@material-ui/core";
import BiographyInformationInput from "./BiographyInformationInput";
import Container from "./Container";
import {useConfirm} from "material-ui-confirm";
import ButtonGroup from '@material-ui/core/ButtonGroup';
// import Button from '@material-ui/core/Button';
import {ArrowRightOutlined, EditOutlined, StopOutlined} from '@ant-design/icons';

const {Header, Footer, Sider, Content} = Layout;

const styles = theme => ({
  headerTitle: {
    color: "white",
  }
});
const BiographyInformation = props => {
  const {classes} = props;
  const confirm = useConfirm();

  const [fullName, setFullName] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [patronymic, setPatronymic] = useState('');

  const [dateOfBirth, setDateOfBirth] = useState('');
  const [address, setAddress] = useState('');
  const [personalGoals, setPersonalGoals] = useState('');

  const [isSave, setIsSave] = useState(false);
  //for views
  const [representationFullName, setRepresentationFullName] = useState('');


  useEffect(() => {
    if (personalGoals !== '') {
      const timeOutId = setTimeout(() => {
        confirm({
          title: "Сохранить ваши данные ? ",
          description: 'Ваши данные будут сохранены и использовы против вас!',
          confirmationText: "Сохранить",
          cancellationText: "Удалить"
        })
          .then(() => {
            setIsSave(!isSave);
            handleChangeAcronim();
          })
          .catch(() => {
            handleClearAllData();
          })
      }, 2000)
      return () => clearTimeout(timeOutId);
    }
  }, [personalGoals]);

  useEffect(() => {
    try {
      if (/^\s/.test(fullName)) {
        setFullName('');
        console.log('in if');
      }
    } catch (e) {
      console.log(e);
    }
  }, [fullName]);


  const handleClearAllData = () => {
    setFullName('');
    setAddress("");
    setDateOfBirth("");
    setPersonalGoals("");
  };


  const handleChangeName = (e) => {

    try {
      console.log(e.target.value);
      setFullName(e.target.value);
    } catch (e) {
      console.error(e);
    }
  };
  const handleChangeDateOfBirth = (e) => {
    setDateOfBirth(e.target.value);
  };
  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleChangePersonalGoals = (e) => {
    setPersonalGoals(e.target.value);
  };

  const handleChangeAcronim = () => {
    let nameMass = [];
    try {
      if (fullName === '') {

      } else {
        nameMass = fullName.split(' ');
      }
      if (nameMass.length === 3) {
        nameMass.map((str, index) => {
          if (index > 0) {
            nameMass[index] = str.substring(0, 1) + '.';
          }
          return str;
        })
      } else {

      }
      setFullName(nameMass.join(' '));
    } catch (e) {
      console.log(e);
    }
  };

  const handleEditFields = () => {
    setIsSave(!isSave);
  };

  const handleCancel = () => {
    setIsSave(!isSave);
  };

  const deleteExcessWord = () => {
    // метод будет удалять 4 слово лишнее;
  };

  const nameLastNamePatronymicToUpperCase = () => {
    // метод будет переводить первые буквы значения
    // имени// фамилии// отчества// в большие буквы
    let massFullName = [];
    massFullName = fullName.split(' ');
    // if (massFullName)
    // пример верещагин ринат ирекович => Верещагин Ринат Ирекович

    // ринат => Ринат верещагин => Верещагин etc.
  };


  return (
    <Layout>
      <Header className={classes.headerTitle}>BiographyInformation</Header>
      <Content>
        <Container> {/*parent*/}
          <>
            {isSave ? (<div className="site-card-border-less-wrapper">
              <Card title="Ваши данные"
                    bordered={true}
                    style={{width: 300}}
                    extra={
                      <Button onClick={handleEditFields} type="primary" shape="circle" icon={<EditOutlined/>}/>
                    }
              >
                <p>ФИО <ArrowRightOutlined/>{fullName}</p>
                <p>Дата рождения <ArrowRightOutlined/> {dateOfBirth}</p>
                <p>Адресс <ArrowRightOutlined/> {address}</p>
                <p>Ваши последние достижения <ArrowRightOutlined/> {personalGoals}</p>

              </Card>
            </div>) : (
              <Card title="Введите ваши данные"
                    bordered={true}
                    style={{width: 300}}
                    extra={<Button
                      onClick={handleCancel}
                      type="primary"
                      shape="circle"
                      icon={<StopOutlined/>}
                      disabled={(fullName === '' || dateOfBirth === '' || address === '' || personalGoals === '')}
                    />
                    }
              >
                <BiographyInformationInput value={fullName}
                                           onChange={handleChangeName}
                                           placeholder={"Введите ваше ФИО"}
                                           disabled={false}
                />
                <BiographyInformationInput value={dateOfBirth}
                                           onChange={handleChangeDateOfBirth}
                                           placeholder={"Введите дату рождения"}
                                           disabled={!fullName}
                />

                <BiographyInformationInput value={address}
                                           onChange={handleChangeAddress}
                                           placeholder={"Введите свой адрес"}
                                           disabled={!dateOfBirth}
                />
                <BiographyInformationInput value={personalGoals}
                                           onChange={handleChangePersonalGoals}
                                           placeholder={"Введите личные достижения"}
                                           disabled={!address}
                />
              </Card>)}
          </>
        </Container>
      </Content>
    </Layout>
  );
};

export default withStyles(styles)(BiographyInformation);
