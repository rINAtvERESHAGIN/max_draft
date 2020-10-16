import React, {useEffect, useState} from "react";
import {getImage} from "../redux/reducers/CardsImages/reducer";
import {useDispatch, useSelector} from "react-redux";


const CardsImages = () => {
    const dispatch = useDispatch();
    const imageSrc = useSelector(state => state.img.imageSrc);
    const [imgsrc, setImgsrc] = useState('');

    const renderItem = () => {
        fetch(`https://source.unsplash.com/1600x900/?beach`)
            .then((response) => {
                dispatch(getImage(response.url))
            })
    }


    // useEffect(() => {
    //     setImgsrc('');
    //     renderItem()
    // }, [imgsrc, imageSrc, renderItem]);


    return (
        <div>
            <img style={{width: "400px", height: "200px"}} alt="beach" src={imageSrc}/>
            <div>
                {/*берете два способа возведения в степень любые и каждый из них прорешать двумя рекурсивными способами
                увеличивая b или n , trace() time()*/}
            </div>
        </div>
    )
}


export default CardsImages;
