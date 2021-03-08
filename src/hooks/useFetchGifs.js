import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/GetGifs';

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGifs( category )
            .then( imagenes => {
                setState({
                    data: imagenes,
                    loading: false
                })
            })
    }, [ category ]);

    return state;
}