import test from 'ava';
import codeBusking from './';

test('test properties', t => {
	t.is(codeBusking.firstName, 'Code');
	t.is(codeBusking.lastName, 'Busking');
	t.is(codeBusking.email, 'me@codebusking.com');
	t.is(codeBusking.homepage, 'www.codebusking.com');
	t.is(codeBusking.github, 'https://github.com/codebusking');
});

test('test methods', t => {
	t.true(codeBusking.name().indexOf('Code') !== -1);
	t.true(codeBusking.name().indexOf('Busking') !== -1);
});
