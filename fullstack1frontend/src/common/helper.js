let userDetails = {};

export function setUserDetailsInHelper(user) {
    userDetails = {...user};
}

export function getUserDetailsInHelper() {
    return userDetails;
}
