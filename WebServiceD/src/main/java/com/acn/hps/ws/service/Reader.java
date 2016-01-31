package com.acn.hps.ws.service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import com.fasterxml.jackson.databind.util.JSONPObject;


public class Reader {

	private static String getWeatherFromAPI(String city) throws IOException {
		String jsonString = null;

		URL url = new URL(
				"http://localhost:8080/test?search=a");
		HttpURLConnection conn = (HttpURLConnection) url.openConnection();
		conn.setRequestMethod("GET");
		conn.setRequestProperty("Accept", "application/json");

		if (conn.getResponseCode() != 200) {
			throw new RuntimeException("Failed : HTTP error code : " + conn.getResponseCode());
		}

		BufferedReader br = new BufferedReader(new InputStreamReader((conn.getInputStream())));
		jsonString = br.readLine();
		conn.disconnect();

		return jsonString;
	}
	
	public static void main(String[] args) throws Exception {
		System.out.println(getWeatherFromAPI("sdsa"));
	}
}
