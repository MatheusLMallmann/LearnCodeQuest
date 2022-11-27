const express = require('express');
const router = express.Router();
const fs = require('fs');
const PythonShell = require('python-shell').PythonShell;

router.post('/python/desafio1', (request, response) => {
    fs.writeFileSync('challenge.py', request.body.code);

    const casosDeTeste = {
        primeiro: [1, 4, 5],
        segundo: [10, -10, 0],
        terceiro: [28, 42, 70]
    }

    const promises = [];
    const resultados = [];

    Object.keys(casosDeTeste).forEach((key) => {
        promises.push(
          new Promise((resolve, reject) => {
            PythonShell.run(
              "challenge.py",
              {
                mode: "text",
                pythonOptions: ["-u"],
                args: casosDeTeste[key],
              },
              function (err, results) {
                if (err) {
                  reject();
                  throw err;
                }
                console.log(results);
                resultados.push(results[0]);
                resolve(true);
              }
            );
          })
        );
    });

    Promise.all(promises).then(() => {
        response.json( {resultados} );
    });
});

router.post('/python/desafio2', (request, response) => {
    fs.writeFileSync('challenge.py', request.body.code);

    const casosDeTeste = {
        primeiro: [10, 0, 0],
        segundo: [10, -2, -20],
        terceiro: [17, 6, 102]
    }

    const promises = [];
    const resultados = [];

    Object.keys(casosDeTeste).forEach((key) => {
        promises.push(
          new Promise((resolve, reject) => {
            PythonShell.run(
              "challenge.py",
              {
                mode: "text",
                pythonOptions: ["-u"],
                args: casosDeTeste[key],
              },
              function (err, results) {
                if (err) {
                  reject();
                  throw err;
                }
                console.log(results);
                resultados.push(results[0]);
                resolve(true);
              }
            );
          })
        );
    });

    Promise.all(promises).then(() => {
        response.json( {resultados} );
    });
});

router.post('/python/desafio3', (request, response) => {
    fs.writeFileSync('challenge.py', request.body.code);

    const casosDeTeste = {
        primeiro: [10, 1],
        segundo: [-12, 1],
        terceiro: [57, 0]
    }

    const promises = [];
    const resultados = [];

    Object.keys(casosDeTeste).forEach((key) => {
        promises.push(
          new Promise((resolve, reject) => {
            PythonShell.run(
              "challenge.py",
              {
                mode: "text",
                pythonOptions: ["-u"],
                args: casosDeTeste[key],
              },
              function (err, results) {
                if (err) {
                  reject();
                  throw err;
                }
                console.log(results);
                resultados.push(results[0]);
                resolve(true);
              }
            );
          })
        );
    });

    Promise.all(promises).then(() => {
        response.json( {resultados} );
    });
});

router.post('/python/desafio4', (request, response) => {
    fs.writeFileSync('challenge.py', request.body.code);

    const casosDeTeste = {
        primeiro: [3, 4, 5],
        segundo: [6, 8, 10],
        terceiro: [25, 'impar']
    }

    const promises = [];
    const resultados = [];

    Object.keys(casosDeTeste).forEach((key) => {
        promises.push(
          new Promise((resolve, reject) => {
            PythonShell.run(
              "challenge.py",
              {
                mode: "text",
                pythonOptions: ["-u"],
                args: casosDeTeste[key],
              },
              function (err, results) {
                if (err) {
                  reject();
                  throw err;
                }
                console.log(results);
                resultados.push(results[0]);
                resolve(true);
              }
            );
          })
        );
    });

    Promise.all(promises).then(() => {
        response.json( {resultados} );
    });
});

router.post('/python/desafio5', (request, response) => {
    fs.writeFileSync('challenge.py', request.body.code);

    const casosDeTeste = {
        primeiro: [5, 5, 3125],
        segundo: [6, 2, 36],
        terceiro: [10, 3, 1000]
    }

    const promises = [];
    const resultados = [];

    Object.keys(casosDeTeste).forEach((key) => {
        promises.push(
          new Promise((resolve, reject) => {
            PythonShell.run(
              "challenge.py",
              {
                mode: "text",
                pythonOptions: ["-u"],
                args: casosDeTeste[key],
              },
              function (err, results) {
                if (err) {
                  reject();
                  throw err;
                }
                console.log(results);
                resultados.push(results[0]);
                resolve(true);
              }
            );
          })
        );
    });

    Promise.all(promises).then(() => {
        response.json( {resultados} );
    });
});

module.exports = app => app.use('/bootcamp', router);