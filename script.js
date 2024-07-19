const customers = [
  { name: 'John Doe', email: 'john.doe@example.com', balance: 1000.50 },
  { name: 'Jane Smith', email: 'jane.smith@example.com', balance: 1500.00 },
  { name: 'Michael Brown', email: 'michael.brown@example.com', balance: 2000.75 },
  { name: 'Emily Johnson', email: 'emily.johnson@example.com', balance: 2500.20 },
  { name: 'Chris Lee', email: 'chris.lee@example.com', balance: 3000.00 },
  { name: 'Olivia White', email: 'olivia.white@example.com', balance: 3500.45 },
  { name: 'David Wilson', email: 'david.wilson@example.com', balance: 4000.80 },
  { name: 'Sophia Taylor', email: 'sophia.taylor@example.com', balance: 4500.00 },
  { name: 'Daniel Harris', email: 'daniel.harris@example.com', balance: 5000.25 },
  { name: 'Emma Clark', email: 'emma.clark@example.com', balance: 5500.90 }
];

const customerList = document.getElementById('customer-list');

customers.forEach(customer => {
  const listItem = document.createElement('li');
  listItem.innerHTML = `<a href="./transfer.html">${customer.name}</a> - ${customer.email} - $${customer.balance.toFixed(2)}`;
  customerList.appendChild(listItem);
});
