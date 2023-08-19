import { Story} from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

const RouteDecorator = (story: any) => (
    <BrowserRouter>
        {story()}
    </BrowserRouter>
)
export default RouteDecorator