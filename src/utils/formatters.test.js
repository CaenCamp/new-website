import expect from 'expect';

import { formatGraphContent } from './formatters';

describe('Formatters utils', () => {
    describe('FormatGraphContent', () => {
        test('It should return an object with a null id and html from an empty object', () => {
            expect(formatGraphContent({})).toEqual({ id: null, html: null });
        });

        test('It should return id if it exists', () => {
            expect(formatGraphContent({ id: 'foo' })).toEqual({
                id: 'foo',
                html: null,
            });
        });

        test('It should return html if it exists', () => {
            expect(formatGraphContent({ id: 'foo', html: '<br />' })).toEqual({
                id: 'foo',
                html: '<br />',
            });
        });

        test('It should return all frontmatter parameters as root parameters', () => {
            expect(
                formatGraphContent({
                    id: 'foo',
                    html: '<br />',
                    frontmatter: {
                        foo: 'titi',
                        bar: 'toto',
                    },
                }),
            ).toEqual({
                id: 'foo',
                html: '<br />',
                foo: 'titi',
                bar: 'toto',
            });
        });
    });
});
