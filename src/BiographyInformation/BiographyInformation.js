import React, {useState, useEffect} from "react";
import {Layout, Card} from "antd";
import {withStyles} from "@material-ui/core";
import BiographyInformationInput from "./BiographyInformationInput";
import Container from "./Container";
import {useConfirm} from "material-ui-confirm";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import {ArrowRightOutlined} from '@ant-design/icons';
const {Header, Footer, Sider, Content} = Layout;

const styles = theme => ({
  headerTitle: {
    color: "white",
  }
});
const BiographyInformation = props => {
  const {classes} = props;
  const confirm = useConfirm();

  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [address, setAddress] = useState('');
  const [personalGoals, setPersonalGoals] = useState('');

  const [isSave,setIsSave] = useState(false);


  const [isEmptyDateOfBirth, setIsEmptyDateOfBirth] = useState(true);
  // const [isEmptyDateOfBirth, setIsEmptyDateOfBirth] = useState(true);
  // const [isEmptyDateOfBirth, setIsEmptyDateOfBirth] = useState(true);

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
          })
          .catch(() => {
            handleClearAllData();
          })
      }, 2000)
      return () => clearTimeout(timeOutId);
    }
  }, [personalGoals]);

  useEffect(() => {
    if (name === '') {
      setIsEmptyDateOfBirth(true);
    } else {
      setIsEmptyDateOfBirth(false);
    }
  }, [name]);


  const handleClearAllData = () => {
    // написать метод который будет очищать значение всех переменных
    setName('');
    setAddress("");
    setDateOfBirth("");
    setPersonalGoals("");
  };

  const handleUnblockField = (unblock) => {
    unblock();
  };

  const handleChangeName = (e) => {
    setName(e.target.value);

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
  const handleOnclicDeliteAll = () => {
    setName('');
  }

  const handleOnclicDeliteFourth = () => {
    setName(name.split(' ')[0,1,2]);
  }

  // const fioWordNum = (name) => {
  //   console.log('Yokyhi');
  //   if (name.split(" ").length === 4) {
  //     return ;
  //   }
  // };


  return (
    <Layout>
      <Header className={classes.headerTitle}>BiographyInformation</Header>
      <Content>
        <Container> {/*parent*/}
          <>

            {isSave ? (<div className="site-card-border-less-wrapper">
              <Card title="Ваши данные" bordered={true} style={{width: 300}}>
                <p>ФИО <ArrowRightOutlined/> {name.split(' ')[0]}</p>

                <p>Дата рождения <ArrowRightOutlined/> {dateOfBirth}</p>
                <p>Адресс <ArrowRightOutlined/> {address}</p>
                <p>Ваши последние достижения <ArrowRightOutlined/> {personalGoals}</p>
              </Card>
            </div>) : (
              <>
                <BiographyInformationInput value={name}
                                           onChange={handleChangeName}
                                           placeholder={"Введите ваше ФИО"}
                                           disabled={false}
                />
                <BiographyInformationInput value={dateOfBirth}
                                           onChange={handleChangeDateOfBirth}
                                           placeholder={"Введите дату рождения"}
                                           disabled={!name}
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
                {(() => {if (name.split(" ").length === 4)
               return (<ButtonGroup disableElevation variant="contained" color="primary" >
                <Button onClick={handleOnclicDeliteAll}>Удалить все</Button>
                <Button onClick={handleOnclicDeliteFourth}>Удалить четвертое слово</Button>
              </ButtonGroup>)
                })()}


              </>)
            }

            {/*<div className="site-card-border-less-wrapper">*/}
            {/*  <Card title="Ваши данные" bordered={true} style={{width: 300}}>*/}
            {/*    <p>Имя - {name}</p>*/}
            {/*    <p>Дата рождения - {dateOfBirth}</p>*/}
            {/*    <p>Адресс - {address}</p>*/}
            {/*    <p>Ваши последние достижения - {personalGoals}</p>*/}
            {/*  </Card>*/}
            {/*</div>*/}

            {/*<BiographyInformationInput value={name}*/}
            {/*                           onChange={handleChangeName}*/}
            {/*                           placeholder={"Введите ваше имя"}*/}
            {/*                           disabled={false}*/}
            {/*/>*/}
            {/*<BiographyInformationInput value={dateOfBirth}*/}
            {/*                           onChange={handleChangeDateOfBirth}*/}
            {/*                           placeholder={"Введите дату рождения"}*/}
            {/*                           disabled={!name}*/}
            {/*/>*/}

            {/*<BiographyInformationInput value={address}*/}
            {/*                           onChange={handleChangeAddress}*/}
            {/*                           placeholder={"Введите свой адрес"}*/}
            {/*                           disabled={!dateOfBirth}*/}
            {/*/>*/}
            {/*<BiographyInformationInput value={personalGoals}*/}
            {/*                           onChange={handleChangePersonalGoals}*/}
            {/*                           placeholder={"Введите личные достижения"}*/}
            {/*                           disabled={!address}*/}
            {/*/>*/}
          </>
        </Container>

      </Content>
      <Footer>

      </Footer>
    </Layout>
  );
};

export default withStyles(styles)(BiographyInformation);
