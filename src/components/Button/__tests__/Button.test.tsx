import React from "react"
import { render, screen } from '@testing-library/react'
import {Button} from '../Button'

describe("Button", () => {
    it("Renders a Button Component", () => {
        render(<Button />)
        const buttonText = screen.getByText('This is a Button')
        expect(buttonText).toBeInTheDocument;
    })
})
