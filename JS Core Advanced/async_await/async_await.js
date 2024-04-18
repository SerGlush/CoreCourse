async function fetchUserData(userID) {
    let userData = await Promise.resolve(userID).then((val) => {
        userData = getUserData(UserID);
    });
    
    return userData;
}
