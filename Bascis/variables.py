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

if __name__ == "__main__":
  check_var_scope()