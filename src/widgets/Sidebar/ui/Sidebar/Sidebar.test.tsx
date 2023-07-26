import {Sidebar} from './Sidebar'
import {fireEvent, render, screen} from '@testing-library/react'
import React from 'react'
import { withTranslation } from 'react-i18next'
import { renderWithTranslation } from '../../../../shared/lib/tests/renderWithTranslation/renderWithTranslation'





describe('Sidebar', () => {
    test('Test render', ()=>{
        const SidebarWithTranslation = withTranslation()(Sidebar)
        renderWithTranslation(<SidebarWithTranslation></SidebarWithTranslation>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('Test toggle', ()=>{
        renderWithTranslation(<Sidebar></Sidebar>)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})