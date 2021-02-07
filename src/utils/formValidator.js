export const formValidator = (inputValue, isCheckBoxMarked) => {
    
    if (!inputValue.trim().length)
        return "Email address is required";

    if (!isCheckBoxMarked)
        return "You must accept the terms and conditions";

    const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;


    if (!inputValue.match(emailRegExp))
        return "Please provide a valid e-mail address";

    const splittedEmail = inputValue.split(".")
    const domenName = splittedEmail[splittedEmail.length - 1];

    if (domenName.trim().toLowerCase() === "co")
        return "We are not accepting subscriptions from Colombia emails";

    return null
}