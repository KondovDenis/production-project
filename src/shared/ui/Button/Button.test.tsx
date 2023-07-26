import {Button, ThemeButton} from './Button' 
import {render, screen} from '@testing-library/react'
import React from 'react'


describe('Button', () => {
    test('Test avaliable button', ()=>{
        render(<Button>TEST</Button>)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })

    test('Test css class in the button', ()=>{
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>)
        expect(screen.getByText('TEST')).toHaveClass('clear')
        screen.debug()
    })
}

)