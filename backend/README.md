# vehicleservice-backend 

## Prerequisites 

1. install nvm

MacOs 
```sh
brew intall nvm 
```

After, install the nvm via brew complete add following at the termial to export the path of the nvm to terminal
```sh
export NVM_DIR=~/.nvm
source $(brew --prefix nvm)/nvm.sh
```

Then run this command to reload the service without restart terminal
```sh
source ~/.zshrc

or select on base of your terminal

*bash*: `source ~/.bashrc`

*ksh*: `. ~/.profile`
```

Then install

```sh
nvm install && nvm use 
```sh


2. Setup .env file

```sh
cp .env.example .env
```

3. Setup Docker & Database

3.1 Install Docker (If you already have docker skip to step 3.2)

The easizses way to install docker is to download docker desktop and install
 
 [Docker Desktop](https://www.docker.com/products/docker-desktop/)


3.2 Run Docker Compose to start a database

```sh
docker compose up -d 

or 

docker-compose up -d
```


4. Migration the Database
Now, we are still in development, so we still not using a migration command for a migration database

```sh
npx prisma db push
```

## Run project
```sh
# Start a devlopment mode 
npm run start:dev

# Start a normal mode 
npm run start
```
