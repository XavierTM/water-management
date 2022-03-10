
def lambda2_curry(func):
	return lambda a : lambda b: func(a, b);


def add(a, b):
	return a + b;


curried_add = lambda2_curry(add);
add_three = curried_add(3);
result = add_three(5);

print(result);