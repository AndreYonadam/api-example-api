import HttpStatus from 'http-status-codes';
import express from 'express';
import db from '../support/db';
import { messageGuard } from '../support/message-guard';

var helloWorld = express.Router();

/* Create hello world message. */
helloWorld.post('/', function (req, res) {
  let message = messageGuard(req.query.message as String)

  db.one('INSERT INTO hello_world(message) VALUES($1) RETURNING id', [message])
    .then(data => {
      res.status(HttpStatus.CREATED).send({ "id": data.id });
    })
    .catch(error => {
      res.status(HttpStatus.BAD_REQUEST).send();
    });
});

/* Delete hello world message. */
helloWorld.delete('/', function (req, res) {
  let id = req.query.id

  db.result('DELETE FROM hello_world WHERE id = $1', id)
    .then(result => {
      res.status(HttpStatus.NO_CONTENT).send();
    })
    .catch(error => {
      res.status(HttpStatus.BAD_REQUEST).send();
    });
});

/* Update hello world message. */
helloWorld.put('/', function (req, res) {
  let id = req.query.id
  let message = messageGuard(req.query.message as String)

  db.result('UPDATE hello_world SET message = $2 WHERE id = $1', [id, message])
    .then(result => {
      res.status(HttpStatus.NO_CONTENT).send();
    })
    .catch(error => {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
    });
});

/* Get all hello world messages. */
helloWorld.get('/', function (req, res) {
  db.any('SELECT * FROM hello_world')
    .then(function (data) {
      res.status(HttpStatus.OK).send(data);
    })
    .catch(function (error) {
      res.status(HttpStatus.BAD_REQUEST).send();
    });
});

export default helloWorld