build:
    yarn parcel build --public-url ./ src/index.pug 

install:
    yarn install --frozen-lockfile

watch:
    yarn parcel serve src/index.pug
