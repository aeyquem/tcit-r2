create table posts (
	id serial primary key,
	name varchar(30) not null,
	description text not null
);

insert into posts(name, description)
values('alejo','el primer post del sistema');
insert into posts(name, description)
values('fabrizio','il secondo post');
insert into posts(name, description)
values('ben','the third one... motivated');
insert into posts(name, description)
values('murakami','これは4番目のポスト');