import React from 'react'

import {
    Document,
    Page,
    Text,
    View,
    Image,
    StyleSheet,
    Font,
  } from "@react-pdf/renderer";

  const styles = StyleSheet.create({
    page: {
      // flexDirection: "row",
      backgroundColor: "white",
      position: "relative",
      fontFamily: "Lato",
    },
    body: {
      paddingTop: 35,
      paddingBottom: 20,
      paddingHorizontal: 35,
    },
    table: {
      fontSize: 10,
      width: 550,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignContent: "stretch",
      flexWrap: "nowrap",
      alignItems: "stretch",
      fontFamily: "Lato",
    },
    addTop: {
      marginTop: 46,
    },
    add40: {
      marginTop: 40,
    },
    smalltable: {
      fontSize: 10,
      width: 450,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignContent: "stretch",
      flexWrap: "nowrap",
      alignItems: "stretch",
      fontFamily: "Lato",
    },
    row: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignContent: "stretch",
      flexWrap: "nowrap",
      alignItems: "stretch",
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: 35,
      padddingLeft: 16,
      paddingRight: 16,
      paddingBottom: 35,
      paddingTop: 10,
      fontFamily: "Lato",
    },
    cell: {
      // borderStyle: "solid",
      // borderWidth: 2,
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: "auto",
      alignSelf: "stretch",
      paddingLeft: 40,
      fontFamily: "Lato",
      color: "#4F4F4F",
    },
    cellRight: {
      // borderStyle: "solid",
      // borderWidth: 2,
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: "auto",
      alignSelf: "stretch",
      alignItems: "flex-end",
      display: "flex",
      textAlign: "right",
    },
    header: {
      backgroundColor: "#0D7590",
      color: "white",
      paddingBottom: 35,
      paddingTop: 10,
      fontFamily: "Lato",
    },
    headerText: {
      fontSize: 11,
      fontWeight: 700,
      color: "white",
      fontFamily: "Lato",
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: "auto",
      alignSelf: "stretch",
      paddingLeft: 40,
      fontFamily: "Lato",
    },
    bgGrey: {
      backgroundColor: "#F2F2F2",
    },
    tableText: {
      margin: 10,
      fontSize: 10,
      color: "black",
    },
    bottomText: {
      bottom: 20,
      left: 0,
      position: "absolute",
      paddingLeft: 40,
      paddingBottom: 20,
      fontSize: 12,
      fontFamily: "Lato",
    },
  });

  Font.register({
    family: "Lato",
    src: "/Lato/Lato-Regular.ttf",
  });

const MyDocument = ({  age,
    cummulative,
    firstname,
    gender,
    level,
    reg_no,
    result,
    session,
    state,
    surname,
    profileImage,
    logo
}) => {
  return (
    <Document>
    <Page size="A4" style={styles.body}>
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Image src={logo} style={{ maxHeight: 100 }} />
        <View
          style={{
            maxWidth: "50vw",
            paddingRight: 10,
            paddingLeft: 10,
            textAlign: "center",
            fontFamily: "Lato",
          }}
        >
          <Text style={{ fontWeight: 700, fontSize: 16, color: "#4F4F4F" }}>
            FREMONT COLLEGE OF EDUCATION
          </Text>
          <Text
            style={{
              marginTop: 10,
              marginBottom: 6,
              fontSize: 12,
              color: "#4F4F4F",
            }}
          >
            No.5 Raymond Osuman Street, PMB 2191 Maitama, Abuja, Nigeria.
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: "#333333",
              textAlign: "center",
              width: "100%",
            }}
          >
            Post Graduate Diploma in Education
          </Text>
          <Text
            style={{
              fontWeight: 700,
              fontSize: 12,
              marginTop: 10,
              color: "#333333",
              textAlign: "center",
              width: "100%",
            }}
          >
            Student First Semester Statement Of Result
          </Text>
        </View>
        <View>
          <Image src={profileImage} style={{ maxHeight: 100 }} />
        </View>
      </View>
      <View
        style={{
          marginTop: 74,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <View
            style={{
              marginBottom: 5,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ marginRight: 20, alignItems: "center" }}>
              <Text
                style={{ fontWeight: 700, fontSize: 12, fontFamily: "Lato" }}
              >
                Name:
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  marginTop: 5,
                  marginBottom: 6,
                  fontSize: 12,
                  fontWeight: 500,
                }}
              >
                {`${firstname} ${surname}`}
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ marginRight: 20, alignItems: "center" }}>
              <Text
                style={{ fontWeight: 700, fontSize: 12, fontFamily: "Lato" }}
              >
                Level:
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  marginTop: 5,
                  marginBottom: 6,
                  fontSize: 12,
                  fontWeight: 500,
                }}
              >
                {level}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              marginBottom: 5,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ marginRight: 20, alignItems: "center" }}>
              <Text
                style={{ fontWeight: 700, fontSize: 12, fontFamily: "Lato" }}
              >
                Reg.No.:
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  marginTop: 5,
                  marginBottom: 6,
                  fontSize: 12,
                  fontWeight: 500,
                }}
              >
                {reg_no}
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ marginRight: 20, alignItems: "center" }}>
              <Text
                style={{ fontWeight: 700, fontSize: 12, fontFamily: "Lato" }}
              >
                Session
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  marginTop: 5,
                  marginBottom: 6,
                  fontSize: 12,
                  fontWeight: 500,
                }}
              >
                {session}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.table, styles.add40]}>
        <View style={[styles.row, styles.header]}>
          <Text style={[styles.headerText]}>S/N</Text>
          <Text style={[styles.headerText]}>Course Code</Text>
          <Text
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "white",
              fontFamily: "Lato",
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: "auto",
              alignSelf: "stretch",
              paddingLeft: 40,
              fontFamily: "Lato",
              width: 200,
            }}
          >
            Course Title
          </Text>
          <Text style={[styles.headerText]}>Unit</Text>
          <Text style={[styles.headerText]}>Grade</Text>
          <Text style={[styles.headerText]}>Total Point</Text>
        </View>

        {result?.map(
          ({ coursecode, credit_unit, grade, title, total_point }, i) => (
            <View
              style={[
                {
                  ...styles.row,
                  backgroundColor: i % 2 !== 0 ? "white" : "#F2F2F2",
                },
              ]}
            >
              <Text style={[styles.cell]}>{i + 1 + "."}</Text>
              <Text style={[styles.cell]}>{coursecode}</Text>
              <Text
                style={{
                  width: 200,
                  flexGrow: 1,
                  flexShrink: 1,
                  flexBasis: "auto",
                  alignSelf: "stretch",
                  paddingLeft: 40,
                  fontFamily: "Lato",
                  color: "#4F4F4F",
                }}
              >
                {title}
              </Text>
              <Text style={[styles.cell]}>{credit_unit}</Text>
              <Text style={[styles.cell]}>{grade}</Text>
              <Text style={[styles.cell]}>{total_point}</Text>
            </View>
          )
        )}
      </View>

      <View style={[styles.smalltable, styles.addTop]}>
        <View style={[styles.row, styles.header]}>
          <Text style={[styles.headerText]}>UNTS</Text>
          <Text style={[styles.headerText]}>UNTD</Text>
          <Text style={[styles.headerText]}>GPTS</Text>
          <Text style={[styles.headerText]}>GPTD</Text>
          <Text style={[styles.headerText]}>GPATS</Text>
          <Text style={[styles.headerText]}>GPATD</Text>
        </View>

        <View style={[styles.row, styles.bgGrey]}>
          <Text style={[styles.cell]}>{cummulative?.unts}</Text>
          <Text style={[styles.cell]}>{cummulative?.untd}</Text>
          <Text style={[styles.cell]}>{cummulative?.gpts}</Text>
          <Text style={[styles.cell]}>{cummulative?.gptd}</Text>
          <Text style={[styles.cell]}>{cummulative?.gpats}</Text>
          <Text style={[styles.cell]}>{cummulative?.gpatd}</Text>
        </View>
      </View>
      <View style={{ fontSize: 12, marginTop: 17 }}>
        <Text>
          Remarks:<Text style={{ color: "#0D7590" }}> Pass</Text>
        </Text>
      </View>
      <View style={styles.bottomText}>
        <View
          style={{ borderTop: "1px solid black", width: 163, marginBottom: 10 }}
        ></View>
        <Text>Registrar</Text>
      </View>
    </Page>
  </Document>
  )
}

export default MyDocument