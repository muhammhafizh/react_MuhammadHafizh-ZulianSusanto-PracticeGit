/* eslint-disable testing-library/no-await-sync-query */
/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen } from '@testing-library/react';
import axios from 'axios';
import Search from '../Search';
import userEvent from '@testing-library/user-event'

jest.mock('axios')

describe('search', () => {
    test('Fetch stories', async () => {
        const stories = [
            {objectID: '1', title: "Hello"},
            {objectID: '2', title: "React"},
        ]

        axios.get.mockImplementationOnce(() => Promise.resolve (
            {
                data: {hits: stories}
            }
        ))

        render(<Search />)

        await act(async () => {
            await userEvent.click(screen.getByRole('button'))
        })

        const items = await screen.findAllByRole('listitem')

        expect(items).toHaveLength(2)
    });

    test('Fetch failed', async () => {
        axios.get.mockImplementationOnce(() => Promise.reject (
            new Error()
        ))

        render(<Search />)

        await act(async () => {
            await userEvent.click(screen.getByRole('button'))
        })

        const items = await screen.findByText(/Ada yang error/i)

        expect(items).toBeInTheDocument()
    });
});
