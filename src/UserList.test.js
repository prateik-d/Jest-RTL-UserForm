import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

const renderComponent = () => {
    const users = [
        { name: 'prateik', email: 'prateik@d.com' },
        { name: 'sam', email: 'sam@sam.com' },
    ]

    render(<UserList users={users} />);
    return { users };
}

beforeEach(() => { 
   
});

test('render one row per user', () => {
    // Render the component

        // const users = [
        //     { name: 'jane', email: 'jane@jane.com' },
        //     { name: 'sam', email: 'sam@sam.com' },
        // ]

        // render(<UserList users={users} />);
        // const { container } = render(<UserList users={users} />);

        const { users } = renderComponent();

    // Find all the rows in the table  \|/

        // screen.logTestingPlaygroundURL();
     
        const rows = within(screen.getByTestId('users')).getAllByRole('row')

        // const rows = container.querySelectorAll('tbody tr');
    
    // Assertion : Correct number of rows in the table
    
    expect(rows).toHaveLength(2);
});

test('render the email and name of each user', () => {
   
    // const users = [
    //     { name: 'jane', email: 'jane@jane.com' },
    //     { name: 'sam', email: 'sam@sam.com' },
    // ]

    // render(<UserList users={users} />);  

    const { users } = renderComponent();
    // screen.logTestingPlaygroundURL();

    for (let user of users)
    {
        const name = screen.getByRole('cell', { name: user.name });
        const email = screen.getByRole('cell', { name: user.email });

        expect(name).toBeInTheDocument()
        expect(email).toBeInTheDocument()
    }
})
