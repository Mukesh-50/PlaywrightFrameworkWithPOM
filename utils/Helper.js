// randomEmail
// randomNumber
// readCSV
// readExcel
// readJSON


export function randomEmail(prefix="testuser")
{
    const email=`${prefix}_${Date.now()}@email.com`

    return email
}