--
-- PostgreSQL database dump
--

-- Dumped from database version 12.15 (Ubuntu 12.15-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.15 (Ubuntu 12.15-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: games; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.games (
    id integer NOT NULL,
    name text NOT NULL,
    platform_id integer NOT NULL
);


--
-- Name: games_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.games_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: games_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.games_id_seq OWNED BY public.games.id;


--
-- Name: grades; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.grades (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: grades_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.grades_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: grades_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.grades_id_seq OWNED BY public.grades.id;


--
-- Name: libraries; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.libraries (
    id integer NOT NULL,
    player_id integer NOT NULL,
    game_id integer NOT NULL,
    grade_id integer DEFAULT 1 NOT NULL,
    finished boolean DEFAULT false NOT NULL
);


--
-- Name: libraries_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.libraries_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: libraries_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.libraries_id_seq OWNED BY public.libraries.id;


--
-- Name: platforms; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.platforms (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: platforms_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.platforms_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: platforms_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.platforms_id_seq OWNED BY public.platforms.id;


--
-- Name: players; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.players (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: players_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.players_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: players_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.players_id_seq OWNED BY public.players.id;


--
-- Name: games id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.games ALTER COLUMN id SET DEFAULT nextval('public.games_id_seq'::regclass);


--
-- Name: grades id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.grades ALTER COLUMN id SET DEFAULT nextval('public.grades_id_seq'::regclass);


--
-- Name: libraries id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.libraries ALTER COLUMN id SET DEFAULT nextval('public.libraries_id_seq'::regclass);


--
-- Name: platforms id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.platforms ALTER COLUMN id SET DEFAULT nextval('public.platforms_id_seq'::regclass);


--
-- Name: players id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.players ALTER COLUMN id SET DEFAULT nextval('public.players_id_seq'::regclass);


--
-- Data for Name: games; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.games VALUES (109, 'The Last of Us', 2);
INSERT INTO public.games VALUES (110, 'God of War', 1);
INSERT INTO public.games VALUES (111, 'The Legend of Zelda: Breath of the Wild', 8);
INSERT INTO public.games VALUES (112, 'Assassin''s Creed Valhalla', 2);
INSERT INTO public.games VALUES (113, 'Cyberpunk 2077', 3);
INSERT INTO public.games VALUES (114, 'Grand Theft Auto V', 4);
INSERT INTO public.games VALUES (115, 'Red Dead Redemption 2', 4);
INSERT INTO public.games VALUES (116, 'Super Mario Odyssey', 3);
INSERT INTO public.games VALUES (117, 'FIFA 21', 7);
INSERT INTO public.games VALUES (118, 'Call of Duty: Warzone', 3);
INSERT INTO public.games VALUES (119, 'Uncharted 4: A Thief''s End', 1);
INSERT INTO public.games VALUES (120, 'Halo Infinite', 1);
INSERT INTO public.games VALUES (121, 'Animal Crossing: New Horizons', 3);
INSERT INTO public.games VALUES (122, 'The Witcher 3: Wild Hunt', 3);
INSERT INTO public.games VALUES (123, 'Doom Eternal', 1);
INSERT INTO public.games VALUES (124, 'Minecraft', 1);
INSERT INTO public.games VALUES (125, 'Fortnite', 9);
INSERT INTO public.games VALUES (126, 'Super Smash Bros. Ultimate', 3);
INSERT INTO public.games VALUES (127, 'NBA 2K21', 2);
INSERT INTO public.games VALUES (128, 'Apex Legends', 5);
INSERT INTO public.games VALUES (129, 'Resident Evil Village', 4);
INSERT INTO public.games VALUES (130, 'Persona 5 Royal', 7);
INSERT INTO public.games VALUES (131, 'Pokémon Sword and Shield', 3);
INSERT INTO public.games VALUES (132, 'Fall Guys: Ultimate Knockout', 3);
INSERT INTO public.games VALUES (133, 'Among Us', 3);
INSERT INTO public.games VALUES (134, 'Game A', 8);
INSERT INTO public.games VALUES (135, 'Game B', 7);
INSERT INTO public.games VALUES (136, 'Game C', 7);
INSERT INTO public.games VALUES (137, 'Game D', 5);
INSERT INTO public.games VALUES (138, 'Game E', 5);
INSERT INTO public.games VALUES (139, 'Game F', 3);
INSERT INTO public.games VALUES (140, 'Game G', 3);
INSERT INTO public.games VALUES (141, 'Game H', 3);
INSERT INTO public.games VALUES (142, 'Game I', 1);
INSERT INTO public.games VALUES (143, 'Game J', 4);
INSERT INTO public.games VALUES (144, 'Game K', 10);
INSERT INTO public.games VALUES (145, 'Guitar Hero', 2);


--
-- Data for Name: grades; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.grades VALUES (1, 'Não Avaliado');
INSERT INTO public.grades VALUES (2, 'Ruim');
INSERT INTO public.grades VALUES (3, 'Mediano');
INSERT INTO public.grades VALUES (4, 'Bom');
INSERT INTO public.grades VALUES (5, 'Ótimo');
INSERT INTO public.grades VALUES (6, 'Excelente');
INSERT INTO public.grades VALUES (7, 'Não Avaliado');


--
-- Data for Name: libraries; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.libraries VALUES (6, 2, 114, 1, false);
INSERT INTO public.libraries VALUES (7, 2, 119, 1, false);
INSERT INTO public.libraries VALUES (4, 1, 114, 6, true);


--
-- Data for Name: platforms; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.platforms VALUES (1, 'PlayStation');
INSERT INTO public.platforms VALUES (2, 'Xbox');
INSERT INTO public.platforms VALUES (3, 'Nintendo Switch');
INSERT INTO public.platforms VALUES (4, 'PC');
INSERT INTO public.platforms VALUES (5, 'Google Stadia');
INSERT INTO public.platforms VALUES (6, 'PlayStation Portable (PSP)');
INSERT INTO public.platforms VALUES (7, 'PlayStation Vita');
INSERT INTO public.platforms VALUES (8, 'Nintendo 3DS');
INSERT INTO public.platforms VALUES (9, 'iOS');
INSERT INTO public.platforms VALUES (10, 'Android');
INSERT INTO public.platforms VALUES (11, 'Teste');
INSERT INTO public.platforms VALUES (12, 'Jhonathan');


--
-- Data for Name: players; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.players VALUES (1, 'Jhonathan');
INSERT INTO public.players VALUES (2, 'Jhon');


--
-- Name: games_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.games_id_seq', 147, true);


--
-- Name: grades_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.grades_id_seq', 7, true);


--
-- Name: libraries_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.libraries_id_seq', 9, true);


--
-- Name: platforms_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.platforms_id_seq', 12, true);


--
-- Name: players_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.players_id_seq', 2, true);


--
-- Name: games games_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_pk PRIMARY KEY (id);


--
-- Name: grades grades_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.grades
    ADD CONSTRAINT grades_pk PRIMARY KEY (id);


--
-- Name: libraries libraries_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.libraries
    ADD CONSTRAINT libraries_pk PRIMARY KEY (id);


--
-- Name: platforms platforms_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.platforms
    ADD CONSTRAINT platforms_pk PRIMARY KEY (id);


--
-- Name: players player_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.players
    ADD CONSTRAINT player_pk PRIMARY KEY (id);


--
-- Name: games games_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_fk0 FOREIGN KEY (platform_id) REFERENCES public.platforms(id);


--
-- Name: libraries libraries_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.libraries
    ADD CONSTRAINT libraries_fk0 FOREIGN KEY (player_id) REFERENCES public.players(id);


--
-- Name: libraries libraries_fk1; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.libraries
    ADD CONSTRAINT libraries_fk1 FOREIGN KEY (game_id) REFERENCES public.games(id);


--
-- Name: libraries libraries_fk2; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.libraries
    ADD CONSTRAINT libraries_fk2 FOREIGN KEY (grade_id) REFERENCES public.grades(id);


--
-- PostgreSQL database dump complete
--

