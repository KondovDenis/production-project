import '../../../app/style/index.scss'
import { Story} from '@storybook/react'


const StyleDecorator = (story:() => Story) => story()


export default StyleDecorator