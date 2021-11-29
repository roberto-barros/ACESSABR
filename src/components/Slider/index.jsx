import React, { useState, useEffect, useContext } from "react";
import { FilterContext } from "../../contexts/FilterContext";
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from "../Card";
import api from '../../config/api';


import 'swiper/swiper-bundle.css';

SwiperCore.use(Pagination);

function Slider() {

    const { filteredPlace, setFilteredPlace } = useContext(FilterContext)
    const [ places, setPlaces ] = useState([])

    useEffect(() => {
        const fetchPlaces = async () => {
            const result = await api.get(`/places?category=${filteredPlace}`)

            console.log(result)

            if (result.status === 200) {
                setPlaces(result.data.places)
            }
        }

        fetchPlaces()
    }, [filteredPlace])

    return (
    <Swiper
        breakpoints={{
                300: {
                    slidesPerView: places.length > 1 ? 1 : places.length
                },
                767: {
                    slidesPerView: places.length > 2 ? 2 : places.length
                },
                1024: {
                    slidesPerView: places.length > 4 ? 4 : places.length
                }
            }}

        >
            {
                places.map(item => (
                    <SwiperSlide key={item.id} >
                        <Card key={item.id} item={item} />
                    </SwiperSlide>

                ))
            }
        </Swiper>
    )
}

export default Slider;