import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';
import { GoogleAuth } from 'google-auth-library';
import * as fs from 'fs';

describe('Button', () => {
    it('renders the button with the correct text', () => {
        render(<Button>Click me</Button>);
        const buttonElement = screen.getByRole('button', { name: /click me/i });
        expect(buttonElement).toBeInTheDocument();
    });

    it('calls the onClick handler when clicked', () => {
        const onClick = jest.fn();
        render(<Button onClick={onClick}>Click me</Button>);
        const buttonElement = screen.getByRole('button', { name: /click me/i });
        buttonElement.click();
        expect(onClick).toHaveBeenCalled();
    });

    it('translate text', async () => {

        const auth = new GoogleAuth({
            keyFile: './src/test/translate_app/gcp_profile.json',
            scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        });

        const getAccessToken = async () => {
            const client = await auth.getClient();
            // const { access_token } = await client.getAccessToken();
            // return access_token;
            return undefined;
        };

        console.log((fs.existsSync('./src/test/translate_app/gcp_profile.json')));
        console.log(await getAccessToken());
    })
});
