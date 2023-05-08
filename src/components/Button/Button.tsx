import React from 'react'

export type ButtonProps = {
    backgroundColor: string,
    color: string
}

export type ButtonStylesParams = {
    backgroundColor: string,
    color: string
}

export const buttonStyles = (params: ButtonStylesParams) => {
    const {backgroundColor, color} = params

    return {
        buttonContainer: {

        },
        button: {
            backgroundColor,
            color
        }
    }
}

export const Button: React.FC<ButtonProps> = (props) => {

    const buttonClasses = buttonStyles({
        ...props
    })


    return (
        <button style={buttonClasses.button}>
            This is a Button
        </button>
    )
}
