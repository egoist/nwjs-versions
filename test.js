import test from 'ava'
import nwjs from './'

test('main', async t => {
	const version = await nwjs()
	t.true(version.length > 0)
})
