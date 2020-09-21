create table posts (
	id serial primary key,
	name varchar(30) not null,
	description text not null
);

insert into posts(name, description)
values('alejo','el primer post del sistema');
insert into posts(name, description)
values('fabri','il secondo post');
insert into posts(name, description)
values('ben','this is not the way');
insert into posts(name, description)
values('murakami','色彩を持たない多崎つくると');