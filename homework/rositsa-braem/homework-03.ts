// Homework 03

// Part 1: Collections and Loops

// Exercise 1: Loop over an array and log items only if the item's length is over 4 characters
{
  const colors: string[] = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'white', 'black'];

  for (const color of colors) {
    if (color.length > 4) {
      console.log(color);
    }
  }
}
// Exercise 2: Write a script to log all numbers from 1 to 100 in the console using a loop
{
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
}
// Exercise 3: Write a script to construct the following pattern using a nested for loop:
{
  const maxStars: number = 5;

  for (let i = 1; i < maxStars * 2; i++) {
    const starsInRow: number = i <= maxStars ? i : maxStars * 2 - i;
    let row: string = '';

    for (let j = 0; j < starsInRow; j++) {
      row += '* ';
    }

    console.log(row.trim());
  }
}

// Exercise 4: Phone number area code substitution
{
  const phoneNumbers: string[] = ['0376829209', '04239982009', '0536829299'];

  for (const phone of phoneNumbers) {
    const newPhone: string = phone.startsWith('0') ? '+359' + phone.slice(1) : phone;

    console.log(`Original: ${phone} -> New: ${newPhone}`);
  }
}
// Exercise 5: Decide on an evening activity
{
  const name: string = 'Rositsa';
  const hour: number = 22;
  const money: number = 35.5;
  const isSick: boolean = false;
  let activity: string;

  if (isSick) {
    activity = 'stay at home and go to bed';
  } else if (money > 20 && hour >= 21 && hour <= 24) {
    activity = 'watch a movie';
  } else if (money >= 20) {
    activity = 'go to the cinema';
  } else {
    activity = 'go to the park';
  }

  console.log(`Name: ${name}, Hour: ${hour}, Money: ${money}, Sick: ${isSick}`);
  console.log(`Evening activity: ${activity}`);
}

// Exercise 6: Use an Enum, Object type, and Arrays
{
  enum AccountType {
    Current = 1,
    FlexSave = 4,
    Deposit = 2,
  }

  type Client = {
    name: string;
    accountType: AccountType;
  };

  const client1: Client = { name: 'John Doe', accountType: AccountType.Current };
  const client2: Client = { name: 'James Smith', accountType: AccountType.FlexSave };
  const client3: Client = { name: 'Sarah Cooper', accountType: AccountType.Deposit };

  const clients: Client[] = [client1, client2, client3];

  for (const client of clients) {
    console.log(
      `Client: ${client.name}, Account type: ${AccountType[client.accountType]} (${client.accountType})`,
    );
  }
}

// Part 2: Functions

// Exercise 7:
{
  function add_item_in_form(
    table_row: number,
    complain: string,
    client_name: string,
    driver_name: string,
    car_number: number,
  ) {
    console.log('Printing the row');
    console.log(table_row, complain, client_name, car_number, driver_name);
  }

  add_item_in_form(2556, 'Driver smoked', 'Ivan', 'Petko', 2523);
}

// Exercise 8:
{
  function sum_2_numbers(number_1: number, number_2: number): number {
    const result: number = number_1 + number_2;
    return result;
  }

  console.log(sum_2_numbers(2, 3));
}

// Exercise 9:
{
  /**
   * Print a person's full name in the console
   * @param {string} firstName - the person's first name
   * @param {string} lastName - the person's last name
   * @param {string} [middleName] - the person's middle name (optional)
   * @returns {void}
   */
  function printFullName(firstName: string, lastName: string, middleName?: string): void {
    if (middleName) {
      console.log(`${firstName} ${middleName} ${lastName}`);
    } else {
      console.log(`${firstName} ${lastName}`);
    }
  }

  printFullName('Rositsa', 'Pacheva', 'Petkova');
  printFullName('Rositsa', 'Pacheva');
}

// Exercise 10:
{
  /**
   * Concatenate a person's first name, last name, and age
   * @param {string} [firstName] - the person's first name
   * @param {string} [lastName] - the person's last name
   * @param {number} [age] - the person's age
   * @returns {string} The concatenated string, with default values and a warning if any argument is missing
   */
  function getPersonInfo(firstName?: string, lastName?: string, age?: number): string {
    if (firstName === undefined || lastName === undefined || age === undefined) {
      return `${firstName ?? 'Unknown'} ${lastName ?? 'Unknown'} ${age ?? 0} - Missing one or all arguments - first name, last name, or age`;
    }

    return `${firstName} ${lastName} ${age}`;
  }

  console.log(getPersonInfo('Rositsa', 'Pacheva', 32));
  console.log(getPersonInfo('Rositsa', 'Pacheva'));
  console.log(getPersonInfo('Rositsa'));
  console.log(getPersonInfo());
}

// Exercise 11:
{
  /**
   * Print a compliment about a programming language
   * @param {object} params - the named parameters
   * @param {string} params.language - the programming language
   * @param {string} params.compliment - the compliment for the language
   * @returns {void}
   */
  function praiseLanguage({
    language,
    compliment,
  }: {
    language: string;
    compliment: string;
  }): void {
    console.log(`I love ${language} because ${compliment}.`);
  }
  praiseLanguage({ language: 'TypeScript', compliment: 'it catches mistakes early' });
  praiseLanguage({ compliment: 'it is easy to read', language: 'Python' });
  praiseLanguage({ language: 'JavaScript', compliment: 'it runs everywhere' });
}

// Exercise 12:
{
  /**
   * Count the uppercase and lowercase letters in a string
   * @param {string} text - the string to check
   * @returns {[number, number]} A tuple with the uppercase and lowercase counts
   */
  function countLetterCase(text: string): [uppercase: number, lowercase: number] {
    let uppercase: number = 0;
    let lowercase: number = 0;

    for (const char of text) {
      if (char !== char.toLowerCase()) {
        uppercase++;
      } else if (char !== char.toUpperCase()) {
        lowercase++;
      }
    }

    return [uppercase, lowercase];
  }

  const [uppercase, lowercase] = countLetterCase('Hello World');

  console.log(`Number of uppercase characters: ${uppercase}`);
  console.log(`Number of lowercase characters: ${lowercase}`);
}
