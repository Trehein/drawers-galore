import React from 'react';
import { Button } from '../components/Button'

export default {
  title: 'Button Examples',
  component: Button,
  argTypes: {}
}

const Template = (args: any) => {
  console.log('hit templatee', args)
  return (
      <Button
        backgroundColor={args.backgroundColor}
        color={args.color}
      />
  )
}

export const BasicButton = Template.bind({})
BasicButton.args = {
  backgroundColor: 'orange',
  color: 'white'
}

export const AnotherButton = Template.bind({})
AnotherButton.args = {

}