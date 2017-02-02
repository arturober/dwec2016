import { SQLite } from 'ionic-native';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-sql-lite',
  templateUrl: 'sql-lite.html'
})
export class SqlLitePage {
  db: SQLite = null;
  error: string = "";
  persons: { id?: number, name: string, age: number }[] = [];
  person: { id?: number, name: string, age: number } = {
    name: "",
    age: null
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    let db = new SQLite();

    db.openDatabase({
      name: 'my.db',
      location: 'default'
    }).then(() => {
      db.executeSql('CREATE TABLE IF NOT EXISTS person (id integer primary key, name text, age integer)', {})
        .then(() => {
          this.db = db;
          db.executeSql('SELECT * FROM person', []).then(resultSet => {
            for (let i = 0; i < resultSet.rows.length; i++) {
              this.persons.push({
                id: resultSet.rows.item(i).id,
                name: resultSet.rows.item(i).name,
                age: resultSet.rows.item(i).age
              });
            }
          });
        }).catch(e => console.error("Can't create table: ", e));
    }).catch(error => {
      console.error("Connection error: ", error);
    });
  }

  ionViewWillUnload() {
    if (this.db !== null) {
      this.db.close();
    }
  }

  add() {
    if (this.db === null) return;

    this.db.executeSql('INSERT INTO person (name, age) VALUES (?,?)',
      [this.person.name, this.person.age]).then(res => {
        this.person.id = res.insertId;
        this.persons.push(this.person);
        this.person = { name: "", age: null };
      });
  }

  remove(person, index: number) {
    if (this.db === null) return;

    this.db.executeSql('DELETE FROM person WHERE id = ?',
      [person.id]).then(res => {
        if (res.rowsAffected > 0) {
          this.persons.splice(index, 1);
        }
      });
  }
}
