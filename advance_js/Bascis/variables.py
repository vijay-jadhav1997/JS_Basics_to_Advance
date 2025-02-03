def check_var_scope():
  if True:
    x = 20
  
  print(x)


i = 1
while i < 5:
  y = 20
  print(f'i + y = {i+y}')
  i += 1

print(f"outside the loop: y => {y}")

for i in range(10):
  nums = 25
  if i % 3 == 0 and i > 5:
    print(i)

print(f'outside the loop: nums => {nums}')

my_str = ' Jay Maha'
print(my_str.strip('ha'))


new_fruits = ['mango', 'apple', 'guva', 'papaya']

for value in new_fruits:
  print(value)

myObj = { 'username': 'Mohan', 'is_active': True}
print("Keys => ", list(myObj.keys()))
print("items => ", list(myObj.items()))
print("Values => ", list(myObj.values()))
for key in myObj.keys():
  print(key, " => ", )


do_something = lambda x, y: x/y if x > y else y/x
print("do_something => ", round(do_something(2,10)))



if __name__ == "__main__":
  check_var_scope()