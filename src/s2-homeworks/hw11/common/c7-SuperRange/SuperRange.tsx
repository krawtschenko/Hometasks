import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: '200px',
                color: '#00CC22',
                margin: '0px 12px',
                '& .MuiSlider-rail': {
                    backgroundColor: '#8B8B8B',
                    opacity: '1',
                }
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
