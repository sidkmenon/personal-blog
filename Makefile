dev_install:
	cd next; yarn install; cd ..;

dev:
	cd next; yarn dev;

lint:
	cd next; yarn lint; yarn format; cd ..;

type-check:
	cd next; yarn type-check; cd ..;

