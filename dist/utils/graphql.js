"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphqlRequest = graphqlRequest;
async function graphqlRequest(url, query, variables) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    });
    if (!response.ok) {
        throw new Error(`GraphQL request failed with status ${response.status}`);
    }
    const result = await response.json();
    if (result.errors) {
        throw new Error(`GraphQL error: ${JSON.stringify(result.errors)}`);
    }
    if (!result.data) {
        throw new Error('No data returned from GraphQL query');
    }
    return result.data;
}
