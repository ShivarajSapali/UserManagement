
import * as actionTypes from './../actions/index'
import getReducer from './users'

const posts = [{
    "businessunit": "IT Admin",
    "dob": "05 October 2011 14:48 UTC",
    "email": "dell@hcl.com",
    "firstname": "Dell",
    "gender": "male",
    "id": "5223323",
    "isadmin": true,
    "lastname": "EMC",
    // "firstname": "Dell",
    // "lastname": "EMC",
    // "id": "5223323",
    // "email": "dell@hcl.com",
    // "dob": "05 October 2011 14:48 UTC",
    // "gender": "male",
    // "isadmin": true,
    // "businessunit": "IT Admin"
}]

describe('Get Users Reducers', () => {
    it('Should return default state', () => {
        const newState = getReducer(undefined, {
            type: actionTypes.MERGE_USERLIST,
            value: posts
        });

        expect(newState).toStrictEqual(posts)
    })
})
