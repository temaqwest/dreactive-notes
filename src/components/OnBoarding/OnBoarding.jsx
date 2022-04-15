import React, {useRef, useState} from 'react';
import classes from "./OnBoarding.module.css";
import Button from "../UI/Button/Button";

import onBoarding1 from '../../assets/images/onboarding/onboarding1.png';
import onBoarding2 from '../../assets/images/onboarding/onboarding2.png';
import onBoarding3 from '../../assets/images/onboarding/onboarding3.png';
import onBoarding4 from '../../assets/images/onboarding/onboarding4.png';
import onBoarding5 from '../../assets/images/onboarding/onboarding5.png';
import onBoarding6 from '../../assets/images/onboarding/onboarding6.png';

const OnBoarding = ({status, ...props}) => {
    const sliderWidth = useRef();
    const [path, setPath] = useState(0);

    function setOnBoardingChecked() {
        localStorage.setItem('onBoarding', JSON.stringify(true));
        status(true);
    }

    const [onBoardingItems, setOnBoardingItems] = useState([
        {
            id: 1,
            image: onBoarding1,
            title: 'Привет, это Блокнот!',
            description: 'Я приложение для хранения ваших заметок. Мой интерфейс прост и понятен для всех без исключения!'
        },
        {
            id: 2,
            image: onBoarding2,
            title: 'Создание заметок',
            description: 'Просто кликайте на кнопку "+" и новый пост будет добавлен в список ваших заметок!'
        },
        {
            id: 3,
            image: onBoarding3,
            title: 'Удаление заметок',
            description: 'На каждой карточке "заметки" есть кнопка удаления "x". Сделайте клик по ней и пост будет удален из списка ваших заметок!'
        },
        {
            id: 4,
            image: onBoarding4,
            title: 'Изменение заметок',
            description: 'Просто кликайте на стандартный текст в основной части приложения и вводите ваш текст!',
        },
        {
            id: 5,
            image: onBoarding6,
            title: 'Как сохранить изменения?',
            description: 'Для того, чтобы сохранить внесённые изменения необходимо воспользоваться комбинацей клавиш CTRL+S и ваши данные будут сохранены.',
        },
        {
            id: 6,
            image: onBoarding5,
            title: 'Ваши данные в безопасности',
            description: 'Наше приложение хранит ваши данные исключительно у вас на компьютере и не предоставляет никакого доступа третьим лицам и сторонним сервисам!',
            lastPost: true,
        },
    ]);

    function sliderNext() {
        setPath(path + sliderWidth.current.clientWidth);
    }

    return (
        <div className={classes.overlay}>
            <div ref={sliderWidth} className={classes.slider}>
                <div className={classes.slider__wrapper} style={{ transform: `translate3d(${-path}px, 0px, 0px)`}}>
                    {
                        onBoardingItems.map((item) => {
                            return (
                                <div key={item.id} className={classes.onBoarding__wrap}>
                                    <div className={classes.onBoarding}>
                                        <div className={classes.image} style={{backgroundImage: `url('${item.image}')`}}/>
                                        <div className={classes.content}>
                                            <h1 className={classes.title}>{item.title}</h1>
                                            <p className={classes.description}>{item.description}</p>
                                            <Button onClick={item.lastPost ? setOnBoardingChecked : sliderNext} mode="text" modifier={classes.nextBtn} icon={item.lastPost ? "success_onboarding" : "arrow_right"} iconModifier="icon--medium">
                                                { item.lastPost ? 'Закончить' : 'Далее'}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default OnBoarding;