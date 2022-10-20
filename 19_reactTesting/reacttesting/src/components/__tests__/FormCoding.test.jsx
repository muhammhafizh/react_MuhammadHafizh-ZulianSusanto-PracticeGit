/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render, screen } from '@testing-library/react';
import NameForm from '../FormCoding';

describe('FormPage', () => {
    test('text label form', () => {
        render(<NameForm />);
        const labelElement = screen.getByLabelText(/\b(?:Nama Lengkap|Email:)\b/i);
        expect(labelElement).toBeInTheDocument();
    }); 

    test('input value in form', () => {
        render(<NameForm />);

        fireEvent.input(
            screen.getByRole('textbox', {name: /nama/i}), //input text
            {target: {value: "hafizh"}}
        )

        fireEvent.click(
            screen.getByRole('radio', {name: /pendidikan/i}), //Input checked
            {target: { checked: "IT" }}
        )

        fireEvent.change(
            screen.getByRole('combobox', {target: { value: "golang" }}) //Select option
        )

        fireEvent.change(
            screen.getByLabelText(/Foto Surat Kesungguhan/i, {
                target: { files: [] } //File upload 
            })
        )

        expect(screen.getByLabelText(/Nama Lengkap/i)).toHaveValue("hafizh")
        expect(screen.getByLabelText(/pendidikan/i)).toBeChecked("IT") 
        expect(screen.getByText("Coding Backend with Golang")).toBeTruthy();
        expect(screen.getByLabelText(/Foto Surat Kesungguhan/i).files).toHaveLength(0);
    })

    test('error input', () => {
        render(<NameForm />)

        fireEvent.input(
            screen.getByRole('textbox', { name: /nama/i }),
            { target: { value: "fizh1" } }
        )

        fireEvent.input(
            screen.getByRole('textbox', { name: /email/i }),
            { target: { value: "imel" } }
        )
        fireEvent.input(
            screen.getByRole('spinbutton', { name: /no Handphone/i }),
            { target: { value: "1234" } }
        )

        expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("fizh1");
        expect(screen.getByLabelText(/Email:/)).toHaveValue("imel");
        expect(screen.getByLabelText(/No Handphone:/)).toHaveDisplayValue("1234");
        expect(screen.getByText("Nama Lengkap Harus Berupa Huruf")).toBeInTheDocument()
        expect(screen.getByText("Email Tidak Sesuai")).toBeInTheDocument()
        expect(screen.getByText("No Handphone Tidak Sesuai")).toBeInTheDocument()
    })

    test('submit button', () => {
        render(<NameForm />)

        fireEvent.input(
            screen.getByRole('textbox', { name: /nama/i }),
            { target: { value: "Hafizh" } }
        )
        fireEvent.input(
            screen.getByRole('textbox', { name: /email/i }),
            { target: { value: "Hafizh@mail.com" } }
        )
        fireEvent.input(
            screen.getByRole('spinbutton', { name: /no Handphone/i }),
            { target: { value: "081398477207" } }
        )

        expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("Hafizh");
        expect(screen.getByLabelText(/Email:/)).toHaveValue("Hafizh@mail.com");
        expect(screen.getByLabelText(/No Handphone:/)).toHaveDisplayValue("081398477207");

        const success = jest.spyOn(window, 'alert').mockImplementation();

        fireEvent.click(
            screen.getByRole('button', { name: /submit/i })
        );

        expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("");
        expect(screen.getByLabelText(/Email:/)).toHaveValue("");
        expect(screen.getByLabelText(/No Handphone:/)).toHaveDisplayValue("");

        expect(success).toHaveBeenCalledTimes(1);
    })

    test('reset button', () => {
        render(<NameForm />)

        fireEvent.input(
            screen.getByRole('textbox', { name: /nama/i }),
            { target: { value: "Hafizh" } }
        )
        fireEvent.input(
            screen.getByRole('textbox', { name: /email/i }),
            { target: { value: "Hafizh@mail.com" } }
        )
        fireEvent.input(
            screen.getByRole('spinbutton', { name: /no Handphone/i }),
            { target: { value: "081398477207" } }
        )

        expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("Hafizh");
        expect(screen.getByLabelText(/Email:/)).toHaveValue("Hafizh@mail.com");
        expect(screen.getByLabelText(/No Handphone:/)).toHaveDisplayValue("081398477207");

        const success = jest.spyOn(window, 'alert').mockImplementation();

        fireEvent.click(
            screen.getByText("Reset")
        );

        expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("");
        expect(screen.getByLabelText(/Email:/)).toHaveValue("");
        expect(screen.getByLabelText(/No Handphone:/)).toHaveDisplayValue("");

        expect(success).toHaveBeenCalledTimes(1);
    })
});