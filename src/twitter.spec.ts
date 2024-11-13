import { describe, it, expect } from 'vitest'
import {render, screen} from '@testing-library/svelte'

import Twitter from './routes/+page.svelte'

describe('twitter', () => {
	it('should start with empty string', () => {
		render(Twitter)

		const text = screen.getByTestId('texto') as HTMLInputElement
		expect(text.value).to.equal('')

		const caracteres = screen.getByTestId('restantes')
		expect(+caracteres.innerHTML).to.equal(140)
	})
})
