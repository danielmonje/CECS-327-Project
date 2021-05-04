### How to build

Make sure you have node installed.

### Step 1: Clone the repository

In terminal or command prompt, navigate to the folder you want to download the project to.

For example:

```
cd Documents
cd CECS327
```

Then run this to download the git repo:

```
git clone https://github.com/danielmonje/CECS-327-Project.git
```

Next, go inside the newly downloaded folder.

```
cd CECS-327-Project.git
```

### How to run

Make sure your terminal is in the project directory, then run:

```
node server.js
```

This is for the server you want to send files to.

```
node client.js
```

This is for the client you want to send files from


### Usage

We didn't finish implementing a function that finds other clients within the network, so for now it is hardcoded.
To send files make sure you save the server IP address in the HOST variable and choose a port that is not in use
for the PORT variable. Then save the file that you want to send to the server and it include its path.


# CECS-327-Project Write-up

Jonathan
Planning stages worked fine until out of nowhere we were down a teammate due to him dropping the class. We originally thought we would use Python for this class but decided on something different with Node Js. A language specifically made to work on its own with Javascript but without the need for browser in the front-end; not that it couldn't be implemented with it. The first few parts were implemented without much issue but the connection handling, file load and syncing became an issue. File loading worked and connection handling worked but for syncing we ran out of time. As well as, connection handling without hardcoded pathing. 
Project topic was interesting but developing this was a challenge seeing that it was a first for either of us. Attempted to work with UDP datagrams, html as a front-end and TCP. TCP was used in the end; I could not figure out how UDP library worked and the reliability of transfer bothered me. HTML as a front-end would have been interesting to implement but could not give enough time to testing this potential idea.

Daniel
Finding a suitable language for this project was the
first thing our group decided to discuss. At first, we
we're going to use Python to implement this project
because of the many libraries it has and it is a very
simple language to use. However, I convinced the group
that using Node JS might be suitable for finishing this
project. Maybe that is why other group members had a hard
time implementing their part because they're learning 
how to use the language as we go on since I'm the only
one with experience using it.

Next thing I did was make a function that gets all the
files from a given directory. It recursively goes through
the directory and grabs all files in it. This wasn't implemented
in the end unfortunately. Another function that wasn't used
was the checksum function so we can keep track of files
were changed at all because it kept track of the filepath,
size of file name, and the size of the file itself.

Then we worked on the difficult part which was establishing
a connection between the server/client. We made a simple
TCP connection between the client and sever using an IP
address and port that wasn't used. We were able to send files
through different machines in the network, but couldn't 
figure out files sent to the server was showing, so we
concerted files into a .txt file which remedied that issue.
Unfortunately, we didn't implement a port scanner and client
finder.
