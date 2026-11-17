// Exercise 1
// Solution
{
  let colors: string[] = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'white', 'black'];

  for (let i = 0; i < colors.length; i++) {
    if (colors[i].length > 4) {
      console.log(colors[i]);
    }
  }
}

// Exercise 2
// Solution
{
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
}

// Exercise 3
// Solution
{
  for (let row = 1; row <= 5; row++) {
    let line: string = '';

    for (let star = 1; star <= row; star++) {
      line += '* ';
    }

    console.log(line.trim());
  }

  for (let row = 4; row >= 1; row--) {
    let line: string = '';

    for (let star = 1; star <= row; star++) {
      line += '* ';
    }

    console.log(line.trim());
  }
}

// Exercise 4
// Solution
{
  let phoneNumbers: string[] = ['0376829209', '04239982009', '0536829299'];

  for (let i = 0; i < phoneNumbers.length; i++) {
    let newNumber: string = '+359' + phoneNumbers[i].slice(1);

    console.log(`Original: ${phoneNumbers[i]}, new: ${newNumber}`);
  }
}

// Exercise 5
// Solution
{
  let name: string = 'Ivan';
  let hour: number = 22;
  let money: number = 35.5;
  let isSick: boolean = false;
  let activity: string = '';

  if (isSick) {
    activity = 'stay at home and go to bed';
  } else if (money > 20 && hour >= 21 && hour <= 24) {
    activity = 'watch a movie';
  } else if (money >= 20) {
    activity = 'go to the cinema';
  } else {
    activity = 'go to the park';
  }

  console.log(`Name: ${name}, hour: ${hour}, money: ${money}, sick: ${isSick}`);
  console.log(`Activity: ${activity}`);
}

// Exercise 6
// Solution
enum AccountType {
  Current = 1,
  FlexSave = 4,
  Deposit = 2,
}

{
  type Client = {
    name: string;
    accountType: AccountType;
  };

  let firstClient: Client = {
    name: 'John Doe',
    accountType: AccountType.Current,
  };

  let secondClient: Client = {
    name: 'Maria Petrova',
    accountType: AccountType.FlexSave,
  };

  let thirdClient: Client = {
    name: 'Georgi Ivanov',
    accountType: AccountType.Deposit,
  };

  let clients: Client[] = [firstClient, secondClient, thirdClient];

  for (let i = 0; i < clients.length; i++) {
    console.log(`${clients[i].name} - ${AccountType[clients[i].accountType]} (${clients[i].accountType})`);
  }
}

// Exercise 7
// Solution
{
  function add_item_in_form(
    table_row: number,
    complain: string,
    client_name: string,
    car_number: number,
    driver_name: string
  ) {
    console.log('Printing the row');
    console.log(table_row, complain, client_name, car_number, driver_name);
  }

  add_item_in_form(2556, 'Driver smoked', 'Ivan', 2523, 'Petko');
}

// Exercise 8
// Solution
{
  function sum_2_numbers(number_1: number, number_2: number): number {
    const result = number_1 + number_2;

    return result;
  }

  console.log(sum_2_numbers(2, 3));
}

// Exercise 9
// Solution
{
  /**
   * Print a person's full name in the console
   * @param {string} firstName - the person's first name
   * @param {string} lastName - the person's last name
   * @param {string} [middleName] - the person's middle name, optional
   * @returns {void}
   */
  function printFullName(firstName: string, lastName: string, middleName?: string): void {
    if (middleName) {
      console.log(`${firstName} ${middleName} ${lastName}`);
    } else {
      console.log(`${firstName} ${lastName}`);
    }
  }

  printFullName('Konstantina', 'Hadzhiantonova', 'Ivanova');
  printFullName('Konstantina', 'Hadzhiantonova');
}

// Exercise 10
// Solution
{
  /**
   * Concatenate a person's first name, last name and age
   * @param {string} firstName - the person's first name
   * @param {string} lastName - the person's last name
   * @param {number} age - the person's age
   * @returns {string} The concatenated details or a message about missing arguments
   */
  function getPersonDetails(firstName?: string, lastName?: string, age?: number): string {
    if (!firstName || !lastName || !age) {
      return 'Missing one or all arguments - first name, last name, or age';
    }

    return `${firstName} ${lastName} ${age}`;
  }

  console.log(getPersonDetails('Ivan', 'Petrov', 30));
  console.log(getPersonDetails('Ivan', 'Petrov'));
  console.log(getPersonDetails('Ivan'));
  console.log(getPersonDetails());
}

// Exercise 11
// Solution
{
  type LoveMessage = {
    programmingLanguage: string;
    compliment: string;
  };

  /**
   * Print a message about a programming language and why it is loved
   * @param {LoveMessage} message - object with the programming language and the compliment
   * @returns {void}
   */
  function printLoveMessage({ programmingLanguage, compliment }: LoveMessage): void {
    console.log(`I love ${programmingLanguage} because ${compliment}`);
  }

  printLoveMessage({ programmingLanguage: 'TypeScript', compliment: 'it catches my mistakes early' });
  printLoveMessage({ programmingLanguage: 'Python', compliment: 'it is easy to read' });
  printLoveMessage({ compliment: 'it runs everywhere', programmingLanguage: 'JavaScript' });
}

// Exercise 12
// Solution
{
  /**
   * Count the uppercase and lowercase letters in a string
   * @param {string} text - the string to check
   * @returns {{ uppercase: number, lowercase: number }} The counts of uppercase and lowercase letters
   */
  function countLetterCases(text: string): { uppercase: number; lowercase: number } {
    let uppercase: number = 0;
    let lowercase: number = 0;

    for (let i = 0; i < text.length; i++) {
      let char: string = text[i];

      if (char >= 'A' && char <= 'Z') {
        uppercase++;
      } else if (char >= 'a' && char <= 'z') {
        lowercase++;
      }
    }

    return { uppercase, lowercase };
  }

  let counts = countLetterCases('Hello World');

  console.log(`Number of uppercase characters: ${counts.uppercase}`);
  console.log(`Number of lowercase characters: ${counts.lowercase}`);
}
