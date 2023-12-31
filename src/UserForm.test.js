import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm  from './UserForm';


test('it shows two input and one button', () => {

    // render the component

    render(<UserForm  />);

    // Manipulate the component or find an element in it

    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');

    // Assertion - make sure the component is doing what we expect it to do 

    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();

})

test("it calls onUserAdd when the form is submitted", async () => {
    
    // // NOT THE BEST IMPLEMENTATION
    // const argsList = [];

    // const callback = (...args) => {
    //     argsList.push(args);
    // }

    const mock = jest.fn();

    // Try to render my component
    render(<UserForm onUserAdd={mock} />);
   
    // Find the two inputs
    // const [nameInput, emailInput] = screen.getAllByRole("textbox");

    const nameInput = screen.getByRole("textbox", {
        name: /name/i
    });
    const emailInput = screen.getByRole("textbox", {
        name: /email/i
    })
   
    // Simulate typing in a name
    await user.click(nameInput);
    await user.keyboard("prateik");
   
    // Simulate typing in an email
    await user.click(emailInput);
    await user.keyboard("prateik@d.com");
   
    // Find the button
    const button = screen.getByRole('button');
   
    // Simulate clicking the button
    user.click(button);
   
    // Assertion to make sure 'onUserAdd' gets called with email/name
    // expect(argsList).toHaveLength(1);
    // expect(argsList[0][0]).toEqual({ name: 'jane', email: 'jane@jane.com' });

    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({ name: 'prateik', email: 'prateik@d.com' });

  });